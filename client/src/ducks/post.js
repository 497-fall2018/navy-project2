import axios from 'axios';

//Action Types
export const TOGGLE_MODAL = "lstnfnd/post/TOGGLE_MODAL";
export const CHANGE_FORM_TYPE = "lstnfnd/post/CHANGE_FORM_TYPE";
export const CHANGE_NAME = "lstnfnd/post/CHANGE_NAME";
export const CHANGE_LOCATION_FORM = "lstnfnd/post/CHANGE_LOCATION_FORM";
export const CHANGE_EMAIL = "lstnfnd/post/CHANGE_EMAIL";
export const CHANGE_DESCRIPTION = "lstnfnd/post/CHANGE_DESCRIPTION";
export const CHANGE_QUESTION = "lstnfnd/post/CHANGE_QUESTION";
export const CHANGE_REWARD = "lstnfnd/post/CHANGE_REWARD";
export const CHANGE_PASSWORD = "lstnfnd/post/CHANGE_PASSWORD";

export const CHANGE_LOCATION_SEARCH = "lstnfnd/post/CHANGE_LOCATION_SEARCH";
export const LOAD_POSTS = "lstnfnd/post/LOAD_POSTS";
export const LOAD_POSTS_FAILURE = "lstnfnd/post/LOAD_POSTS_FAILURE";
export const LOAD_POSTS_SUCCESS = "lstnfnd/post/LOAD_POSTS_SUCCESS";
export const SUBMIT_NEW_LOST_POST = "lstnfnd/post/SUBMIT_NEW_LOST_POST_SUCCESS";
export const SUBMIT_NEW_LOST_POST_FAILURE = "lstnfnd/post/SUBMIT_NEW_LOST_POST_FAILURE";
export const SUBMIT_NEW_LOST_POST_SUCCESS = "lstnfnd/post/SUBMIT_NEW_LOST_POST_SUCCESS";
export const SUBMIT_UPDATED_POST = "lstnfnd/post/SUBMIT_UPDATED_POST_SUCCESS";
export const SUBMIT_UPDATED_POST_FAILURE = "lstnfnd/post/SUBMIT_UPDATED_POST_FAILURE";
export const SUBMIT_UPDATED_POST_SUCCESS = "lstnfnd/post/SUBMIT_UPDATED_POST_SUCCESS";
export const CHANGE_ITEM_PREVIEW = "lstnfnd/post/CHANGE_ITEM_PREVIEW";
export const HANDLE_IMAGE_CHANGE = "lstnfnd/post/HANDLE_IMAGE_CHANGE";
export const HANDLE_DELETE_POST = "lstnfnd/post/HANDLE_DELETE_POST";
export const HANDLE_DELETE_POST_SUCCESS = "lstnfnd/post/HANDLE_DELETE_POST_SUCCESS";
export const HANDLE_DELETE_POST_FAILURE = "lstnfnd/post/HANDLE_DELETE_POST_FAILURE";
export const HANDLE_UPDATE_POST = "lstnfnd/post/HANDLE_UPDATE_POST";
export const HANDLE_CLICK_SHOW_PASSWORD = "lstnfnd/post/HANDLE_CLICK_SHOW_PASSWORD";



const INITIAL_STATE = {
    modal_open: false,
    file: null,
    image: null,
    data: [{
        "_id": "0",
        "name": "iPhone",
        "location": "Tech",
        "email": "yulkim2019@u.northwestern.edu",
        "created": "11-06-2018 16:38",//new Date().format('m-d-Y h:i:s'),
        "description": "Last seen in LG51.",
        "photo": "/posts/phone.jpeg",
        "password": "xxx0"
    }],
    lost: [
        {
            "_id": "",
            "name": "iPhone 5S",
            "location": "Tech",
            "email": "yulkim2019@u.northwestern.edu",
            "created": "11-06-2018 16:38",//new Date().format('m-d-Y h:i:s'),
            "description": "Last seen in LG51. Black rubber case.",
            "photo": "/posts/phone.jpeg",
            "reward": "$10",
            "password": "xxx1"
        },
        {
            "_id": "",
            "name": "Wild Card",
            "location": "Norris",
            "email": "yulkim2019@u.northwestern.edu",
            "created": "11-05-2018 12:30",//new Date().format('m-d-Y h:i:s'),
            "description": "I left it in Norbucks.",
            "photo": "/posts/wildcard.jpg",
            "reward": "$5",
            "password": "xxx2",
        }
    ],
    found: [{
        "_id": "",
        "name": "Wallet",
        "location": "Norris",
        "email": "yulkim2019@u.northwestern.edu",
        "created": "11-05-2018 12:30",//new Date().format('m-d-Y h:i:s'),
        "description": "It is a brown wallet with pink stitching. Found outside of Norris.",
        "photo": "/posts/wallet.jpg",
        "question": "How much money is in the wallet?",
        "password": "ooo1",
    }],
    error: null,
    form_type: "",
    description: "",
    email: "",
    location: "",
    name: "",
    question: "",
    reward: "",
    updateId: null,
    pollInterval: null,
    error_message: "",
    showPassword: false,
    password: '',
    lost_locations: [["Tech", 25], ["Norris", 15], ["Plex", 4], ["Sheridan Rd", 1], ["Annenberg", 1], ["SPAC", 1]],
    found_locations: [["Norris", 10], ["Plex", 4], ["Sheridan Rd", 1], ["SPAC", 1]],
    location_search: "",
};

//Reducers
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type){
        case CHANGE_ITEM_PREVIEW:
            return {
                ...state,
                file: action.payload,
            }
        case CHANGE_LOCATION_SEARCH:
            return {
                ...state,
                location_search: action.payload,
            }
        case HANDLE_IMAGE_CHANGE:
            return {
                ...state,
                image: action.payload,
            }
        case TOGGLE_MODAL:
            return {
                ...state,
                modal_open: !state.modal_open,
            }
        // ----------------------------post form--------------------------------
        case CHANGE_FORM_TYPE:
            return {
                ...state,
                form_type: action.payload,
            }
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload,
            }
        case CHANGE_LOCATION_FORM:
            return {
                ...state,
                location: action.payload,
            }
        case CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload,
            }
        case CHANGE_DESCRIPTION:
            return {
                ...state,
                description: action.payload,
            }
        case CHANGE_QUESTION:
            return {
                ...state,
                question: action.payload,
            }
        case CHANGE_REWARD:
            return {
                ...state,
                reward: action.payload,
            }
        case HANDLE_CLICK_SHOW_PASSWORD:
            return {
                ...state,
                showPassword: !state.showPassword

            }
        case CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case CHANGE_FORM_TYPE:
            return {
                ...state,
                formType: action.payload,
            }
        case LOAD_POSTS:
        case LOAD_POSTS_SUCCESS:
            if(action.payload) {
                return {
                    ...state,
                    error_message: "",
                    data: action.payload.data,
                }
            }
            return {
                ...state,
                error_message: ""
            }
        case LOAD_POSTS_FAILURE:
            /*
            if the quiz load fails, need to lead them to a 500 page.
            */
            return {
                ...state,
                error_message: "Something went wrong while loading the quiz. ",
            }
        case SUBMIT_NEW_LOST_POST:
        case SUBMIT_NEW_LOST_POST_SUCCESS:
            if(action.payload){
                return {
                    ...state,
                    error_message: "",
                    name: "",
                    location: "",
                    email: "",
                    reward: "",
                    question: "",
                    password: "",
                    description: "",
                    image: null,
                }
            } else {
                return {
                    ...state,
                }
            }

        case SUBMIT_NEW_LOST_POST_FAILURE:
            /*
            if the posting fails, need to lead them to a 500 page.
            */
            return {
                ...state,
                error_message: "Something went wrong while submitting the lost item post.",
            }
        case HANDLE_UPDATE_POST://when user clicks on "update"
            return {
                ...state,
                modal_open: !state.modal_open,
                author: action.payload.author,
                description: action.payload.description,
                file: action.payload.file,
                image: action.payload.image,
                updateId: action.payload.id,
            }
        case SUBMIT_UPDATED_POST:
        case SUBMIT_UPDATED_POST_SUCCESS://when user clicks on "submit" after edit
            if(action.payload){
                return {
                    ...state,
                    error_message: "",
                    modal_open: !state.modal_open,
                    author: "",
                    description: "",
                    file: null,
                    image: null,
                    updateId: null,
                }
            } else {
                return {
                    ...state,
                }
            }

        case SUBMIT_UPDATED_POST_FAILURE:
            /*
            if the posting fails, need to lead them to a 500 page.
            */
            return {
                ...state,
                error_message: "Something went wrong while loading the result.",
            }
        case HANDLE_DELETE_POST:
        case HANDLE_DELETE_POST_SUCCESS:
            if(action.payload) {
                const i = state.data.findIndex(c => c._id === action.payload);
                const new_data = [
                  ...state.data.slice(0, i),
                  ...state.data.slice(i + 1),
                ];
                return {
                    ...state,
                    data: new_data
                }
            } else {
                return {
                    ...state,
                }
            }
        case HANDLE_DELETE_POST_FAILURE:
            /*
            if the posting fails, need to lead them to a 500 page.
            */
            return {
                ...state,
                error_message: "Something went wrong while loading the result.",
            }
        default:
            return {
                ...state
            }
    }
}


//Action Creators
export const change_item_preview = (file) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_ITEM_PREVIEW,
            payload: file,
        })
    }
}
export const change_location_search = (loc) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_LOCATION_SEARCH,
            payload: loc,
        })
    }
}
export const handle_image_change = (file) => {
    return (dispatch) => {
        dispatch({
            type: HANDLE_IMAGE_CHANGE,
            payload: file,
        })
    }
}
export const toggle_modal = () => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_MODAL,
        });
    };
};
// ---------------------------------post form-----------------------------------
export const change_form_type = (formType) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_FORM_TYPE,
            payload: formType,
        });
    }
}
export const change_name = (name) => {
    return (dispatch) => {
        dispatch({
                type: CHANGE_NAME,
            payload: name,
        })
    }
}
export const change_location_form = (loc) => {
    return (dispatch) => {
        dispatch({
                type: CHANGE_LOCATION_FORM,
            payload: loc,
        })
    }
}
export const change_email = (email) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_EMAIL,
            payload: email,
        })
    }
}
export const change_description = (desc) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_DESCRIPTION,
            payload: desc,
        })
    }
}
export const change_question = (q) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_QUESTION,
            payload: q,
        })
    }
}
export const change_reward = (reward) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_REWARD,
            payload: reward,
        })
    }
}
export const handle_click_show_password = () => {
    return (dispatch) => {
        dispatch({
            type: HANDLE_CLICK_SHOW_PASSWORD,
        });
    }
}

export const change_password = (password) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_PASSWORD,
            payload: password,
        });
    }
}
export const load_posts = () => {
    const url = `/api/comments`;
    return (dispatch) => {
        dispatch({
            type: LOAD_POSTS,
        });
        axios.get(url)
          .then((response) => load_posts_success(dispatch, response))
          .catch((error) => load_posts_failure(dispatch, error))
    }
}

export const load_posts_success = (dispatch, response) => {
    dispatch({
        type: LOAD_POSTS_SUCCESS,
        payload: response.data,
    });
}

export const load_posts_failure = (dispatch, error) => {
    dispatch({
        type: LOAD_POSTS_FAILURE,
    });
}
export const submit_updated_post = (author, description, file, updateId) => {
    console.log("x" + updateId)
    var formData = new FormData();
    formData.append('author', author);
    formData.append('description', description);
    formData.append('frame', file, file.name);
    for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]);
    }
    const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
    return (dispatch) => {
        dispatch({
            type: SUBMIT_UPDATED_POST,
        });
        axios.put(`/api/comments/${updateId}`, formData, config)
          .then((response) => submit_updated_post_success(dispatch, response))
          .catch((error) => submit_updated_post_failure(dispatch, error))
    }
}

export const submit_updated_post_success = (dispatch, response) => {
    dispatch({
        type: SUBMIT_UPDATED_POST_SUCCESS,
        payload: response.data,
    });
}

export const submit_updated_post_failure = (dispatch, error) => {
    dispatch({
        type: SUBMIT_UPDATED_POST_FAILURE,
    });
}

export const submit_new_lost_post = (name, location, email, description, reward, password) => {
    var formData = new FormData();
    formData.append('name', name);
    formData.append('location', location);
    formData.append('email', email);
    formData.append('description', description);
    formData.append('reward', reward);
    formData.append('password', password);
    // formData.append('frame', file, file.name);
    const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
    for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]);
    }
    return (dispatch) => {
        dispatch({
            type: SUBMIT_NEW_LOST_POST,
        });
        axios.post(`/api/lost`, formData, config)
          .then((response) => submit_new_lost_post_success(dispatch, response))
          .catch((error) => submit_new_lost_post_failure(dispatch, error))
    }
}

export const submit_new_lost_post_success = (dispatch, response) => {
    dispatch({
        type: SUBMIT_NEW_LOST_POST_SUCCESS,
        payload: response.data,
    });
}

export const submit_new_lost_post_failure = (dispatch, error) => {
    dispatch({
        type: SUBMIT_NEW_LOST_POST_FAILURE,
    });
}

export const handle_update_post = (author, description, file, image, id) => {
    return (dispatch) => {
        dispatch({
            type: HANDLE_UPDATE_POST,
            payload: {"author": author, "description": description, "file": file, "image": image, "id": id}
        })
    }
}

export const handle_delete_post = (id) => {
    return (dispatch) => {
        dispatch({
            type: HANDLE_DELETE_POST,
        });
        axios.delete(`/api/comments/${id}`, {
        })
        .then((response) => handle_delete_post_success(dispatch, response, id))
        .catch((error) => handle_delete_post_failure(dispatch, error))
    }
}
export const handle_delete_post_success = (dispatch, response, id) => {
    dispatch({
        type: HANDLE_DELETE_POST_SUCCESS,
        payload: id,
    });
}

export const handle_delete_post_failure = (dispatch, error) => {
    dispatch({
        type: HANDLE_DELETE_POST_FAILURE,
    });
}
