import { createContext, useContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";

export default function FavoritesProvider({ children }) {
	const [ favorite, setFavorite ]	= useState(() => {
		const salvos = localStorage.getItem("favoritos");
		return salvos ? JSON.parse(salvos) : [];
	});
	useEffect(() => {
		localStorage.setItem("favoritos", JSON.stringify(favorite));
	}, [favorite]);

	return (
		<FavoritesContext.Provider
			value={{favorite, setFavorite}} >
			{ children }
		</FavoritesContext.Provider>
	);
}

/* Hook personalizado */
export function useFavoriteContext() {
	const { favorite, setFavorite }	 = useContext(FavoritesContext);

	function addFavorite(newFavorite) {

		/* verificar se tem item favorito repetido */
		const repeatedFavorite = favorite.some(item => item.id === newFavorite.id);

		/* nova lista recebe lista anterior */
		let newList = [...favorite]

		/* verificar se nao tem repetido entao adicione o item na lista de favoritos */
		if(!repeatedFavorite) {
			newList.push(newFavorite)
			return setFavorite(newList) /* atualizar a lista */
		}

		/* se for repetido ele vai ser tirado da lista */
		newList = favorite.filter((fav) => fav.id !== newFavorite.id)

		/* nova lista atualizada */
		return setFavorite(newList)

	}

	return {
		favorite,
		addFavorite
	}

}