export default function check (router) {
    if(localStorage.tnt === undefined) {
        router.push('/enter')
    } else {
        console.log('welcome')
    }
}