export const prueba = async () => {
    const respuesta = await fetch('https://api.spotify.com/v1/me/top/artists', {
        method : 'GET',
        headers : {'Authorization' : 'Bearer BQC77tBn30wr3gbn8kQ3fHPfEinucgR2BKguTp3hq6DshATxilLxYSlYlcZUVCwpHJHQ6dHCKbVHbVuF3Eg57qnwuoI6zxCRkBdYiXHjL1hC5bwWGKsWWcW-LxKoSA3DJELXfK4u5O6hCQp6oAkB-20w-eyADQ6CBzeQsEAoZ6zuZrBUWUrknBaI8LILNvHv3CjFxhRdtObitZrYqjuPugwu57_hTET8YdOR2rSimQE'}
    });

    const data = await respuesta.json();
    console.log(data.items);
}