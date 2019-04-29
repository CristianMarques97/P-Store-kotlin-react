export const LOGIN_USER = 'user:login';

export default function userlogin(user) {
        return {
            type: LOGIN_USER,
            payload : {
            id: user.id,
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            senha: user.senha,
            data_nascimento: user.data_nascimento,
            profile_icon: user.profile_icon,
            adm: user.adm, 
            logradouro: user.logradouro,
            numero: user.numero,
            bairro: user.bairro,
            cidade: user.cidade,
            estado: user.estado,
            complemento: user.complemento,
            cpf: user.cpf,
            cep: user.cep
        }
    }
}


/****** modelação de usuário: *******

{
    "id": 2,
    "name": "Zé",
    "lastname": "Zekinhas",
    "email": "123@ze.com",
    "senha": "***********",
    "data_nascimento": "2001-04-20",
    "profile_icon": "base64 da imagem de perfil",
    "adm": false, 
    "logradouro": "Rua .......",
    "numero": "321",
    "bairro": "bairro",
    "cidade": "São Paulo",
    "estado": "SP",
    "complemento": "123",
    "cpf": "xxxxxxxxxx",
    "cep": "148064"
}

****************************************/