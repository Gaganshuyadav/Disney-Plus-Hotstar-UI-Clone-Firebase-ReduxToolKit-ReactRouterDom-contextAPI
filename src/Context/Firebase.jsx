import { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { setUserLoginDetails, setSignOutState, } from "../features/Slices/userSlice";
import { setMovies } from "../features/Slices/movieSlice";
import { addToWatchlist, addToMovies, addToSeries } from "../features/Slices/allWatchlistMoviesSeriesSlice";

export const FirebaseContext = createContext();

//--------------( initialize)---------------------------
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

const firebaseApp = initializeApp(firebaseConfig);

//--------------( Authentication )--------------------------

import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged , signOut} from "firebase/auth";

const firebaseAuth = getAuth(firebaseApp);

const googleProvider = new GoogleAuthProvider();


//--------------( firestore Storage )--------------------------

import { getFirestore, collection, getDocs, getDoc, doc, addDoc, query, where } from "firebase/firestore";

const firestore = getFirestore( firebaseApp);

//--------------( Authentication functions)---------------------------------------------

export const FirebaseProvider = ( props ) => {

    let [ user, setUser] = useState(null); //just for my management understanding and give isLoggedIn value
    console.log("user... " ,user);

    const dispatch = useDispatch();
    const userStoreState = useSelector(state=>state.user);
    console.log("useSelector ",userStoreState);
 
    const signinWithGoogle = async () =>{
        let result = await signInWithPopup( firebaseAuth, googleProvider );
        if(result){
            setUser(result);
        }

        return result;
    }

    const signout = async () =>{
       const result = await signOut( firebaseAuth);
       dispatch( setSignOutState());
       return result;
    }
//-----------------( firestore functions)--------------------------------------------------

//get all movies 
     
const getAllMovies = async()=>{

    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trendings = [];
    
    const allMovies = await getDocs( collection( firestore, "movies"));
    
    allMovies.forEach(( movie)=>{

        switch(movie.data().type){
            case "recommend": {
                //we can also do like:- recommends = [ ...recommends, { ...movie.data() , id: movie.id }]
                recommends.push( { ...movie.data() , id: movie.id });
                break;
            }
            case "new": {
                newDisneys.push( { ...movie.data() , id: movie.id });
                break;
            }
            case "original": {
                originals = [ ...originals, { ...movie.data() , id: movie.id } ];
                break;
            }
            case "trending": {
                trendings = [ ...trendings, { ...movie.data() , id: movie.id }];
                break;
            }
        }
    })

    
    dispatch( setMovies( { recommend: recommends, newDisney: newDisneys, original: originals, trending: trendings}));
    
    
}
    
    
//get movie detail
const getMovieDetails = async ( id)=>{
    const res = await getDoc( doc( firestore, "movies", id));
    return res;
}
    

//add to whichlist 
const addToWatchList = async ( id, backgroundImg, cardImg, description, subTitle, title, titleImg, type) => {
    const res = await addDoc( collection( firestore, "watchlist"), {
        origiID: id,
        backgroundImg: backgroundImg,
        cardImg: cardImg,
        description: description,
        subTitle: subTitle,
        title: title,
        titleImg: titleImg,
        type: type,
        userName: user.displayName,
        userEmail: user.email,
        userID: user.uid
    });

}

//get watchlist for a specific user
const getWatchlist = async ( userID)=>{
    const watchlistArray = []; 
    const watchlist = await getDocs(query( collection( firestore, "watchlist"),where("userID","==",userID)));
    watchlist.forEach(( list)=>{
        watchlistArray.push(list.data());
    })

    dispatch( addToWatchlist(watchlistArray));

    return watchlist;
}

//get all movies
const getAllMoviesSearch = async ()=>{
    const moviesArray = []; 
    const movies = await getDocs(query( collection( firestore, "movies"),where("productType","==","movies")));
    movies.forEach(( movie)=>{
        moviesArray.push( {...movie.data() , id: movie.id});
    })

    dispatch( addToMovies( moviesArray ));

    return moviesArray;
}

//get all series
const getAllSeriesSearch = async ( )=>{
    const seriesArray = []; 
    const series = await getDocs(query( collection( firestore, "movies"),where("productType","==","series")));
    series.forEach(( seri)=>{
        seriesArray.push({...seri.data() , id: seri.id});
    })

    dispatch( addToSeries(seriesArray));

    return seriesArray;
}

//-------------------------------------------------------------------

    useEffect(()=>{
        onAuthStateChanged( firebaseAuth, ( userA)=>{
            if(userA){
                setUser(userA);
                dispatch( setUserLoginDetails( { name: userA.displayName, email: userA.email, photo: userA.photoURL, userID: userA.uid}))

            }
            else{
                setUser(null);
            }
        })
    },[])

    const isLoggedIn = user ? true : false;
    console.log("user isLoogedIn ...", isLoggedIn);

    return <FirebaseContext.Provider value={ { signinWithGoogle, signout, isLoggedIn, getAllMovies, getMovieDetails, addToWatchList , getWatchlist, getAllMoviesSearch, getAllSeriesSearch} } >{ props.children}</FirebaseContext.Provider>
}