
const initialState = {
    news: [
        {   id: "1",
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum error fuga praesentium quisquam.Dolore illum incidunt minima modi perferendis.',
            img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        },
        {   id: "2",
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum error fuga praesentium quisquam.Dolore illum incidunt minima modi perferendis.',
            img: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-cloudscape-canvas-pixabay.jpg"
        },
        {   id: "3",
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum error fuga praesentium quisquam.Dolore illum incidunt minima modi perferendis.',
            img: "https://afishanovgorod.ru/wp-content/uploads/2019/09/maxresdefault.jpg"
        },
        {   id: "4",
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum error fuga praesentium quisquam.Dolore illum incidunt minima modi perferendis.',
            img: "https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2016/02/Barn-DPSexample.jpg?resize=717%2C478&ssl=1"
        },
        {   id: "5",
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum error fuga praesentium quisquam.Dolore illum incidunt minima modi perferendis.',
            img: "https://cdn.pixabay.com/photo/2019/09/03/13/17/landscape-4449414_960_720.jpg"
        },
    ]
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default newsReducer;
