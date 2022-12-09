
export const requests = {

    authapi: {

        registerServiceProvider: '/servicesprovider/register',
        registerAdvertiser: '/advertisers',
        login: '/users/login',

    },

    userapi: {

        uploadAvatar:'/users/avatar/',
        updateUser:'/users/update/',
        logout: '/auth/logout',
    
    },

    annonceapi: {

        create:'/annonces/create',
        update:'/annonces/update/',
        getAll:'/annonces/getAll',
        getbyId:'/annonces/getOne/',
        delete:'/annonces/delete/',
        getByUserId:'/annonces/getByUserId/',
       
    
    },

    postsapi :{
        
            create:'/posts/create',
            getAll : '/posts/getAll',
            myposts : '/posts/myposts',
            like : '/posts/like',
            dislike : '/posts/dislike',
            delete : '/posts/delete',
            imagePost:"/imagepost",
            getPostById:"/posts/getbyid"
            
    },

    commentsapi : {
        create : '/commentaires/create',
        dispaly:'/commentaires/getAll',
        idCommebt:`/commentaires/getonebyid/`,

        repondre:'/commentaires/createinside',

        deletcomnt:'/commentaires/deletebyid/',
        updateCommtaire:"/commentaires/updatebyid/"
    }
    
}