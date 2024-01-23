import {defineStore} from 'pinia'

import { ref } from 'vue'
import Swal from 'sweetalert2'

//Llamar a libreria
const showAlert = () => {
    Swal.fire({
        title: "Agregado!",
        text: "POKEMÓN AGREGADO A FAVORITOS",
        icon: "success"
      });
}
const removeBtn = () => {
    Swal.fire({
        title: "Pokemón eliminado!",
        icon: "success",
        iconColor: "#ff0000"
      });
}

export const useFavoritoStore = defineStore('favoritos', () => {

    const favoritos = ref([]);

    if(localStorage.getItem('favoritos')) {
        favoritos.value = JSON.parse(localStorage.getItem('favoritos'))
    }

    const add = (poke) => {
        favoritos.value.push(poke)
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
        showAlert()

    }

    const remove = (id) => {
        favoritos.value = favoritos.value.filter(item => item.id !== id)
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
        removeBtn();

    }

//Encontrar poke si existe en array favoritos
    const findPoke = name => favoritos.value.find(item => item.name === name)

    return {
        favoritos,
        add,
        remove,
        findPoke
    }
})