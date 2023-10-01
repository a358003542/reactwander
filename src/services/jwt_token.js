const HOST='localhost'
const PORT= '8000'


export function getToken(){
    const token = localStorage.getItem('token');
    return token
  };


export function create_jwt_token(send_data){
    return fetch(`http://${HOST}:${PORT}/api/jwt/create/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(send_data)
    }).then((response) => response.json())
    .catch((e) => console.log(e))
}


export function get_user_info(){
    const token = getToken();
    return fetch(`http://${HOST}:${PORT}/api/users/me/`, {
        method: 'GET',
        headers: {
            'Authorization': `JWT ${token}`
        }
    }).then((response) => response.json())
    .catch(e => console.log(e))
}