import images from "./images"


const links = [
    {
        name: 'home',
        path: 'home'
    },
    {
        name: 'about us',
        path: 'about'
    },   {
        name: 'services',
        path: 'services'
    },   {
        name: 'prices',
        path: 'prices'
    },   {
        name: 'location',
        path: 'location'
    },   {
        name: 'sub',
        path: 'sub'
    },
]

const services = [
    {
        img: images.CombAndScissors,
        title: 'Scissor Cut & Style',
        desc: `You will experience precison cutting and styling at its
        finest from our top stylists
        this treatment offers a`
    },
    {
        img: images.HairDryer,
        title: 'Hair Wash With Model',
        desc: `This service is for the guys
        who like to keep it sharp at all
        times. For a skin fade to stay
        at its sharpest we`
    },
    {
        img: images.Blade,
        title: 'Hot Towel Cut Throat Shave',
        desc: `Our shaves start with a
        consultation and skin analysis
        to find out any allergies or
        sensitivities.`
    },
]

const priceList = [
    {
        name: 'haircuts',
        price: '23'
    },
    {
        name: 'haircut children under 14',
        price: '05'
    }, 
    {
        name: 'razor cut',
        price: '11'
    }, 
    {
        name: 'shave',
        price: '13'
    }, 
    {
        name: 'neck shave',
        price: '15'
    }, 
    {
        name: 'shaving whole head',
        price: '18'
    }, 
    {
        name: 'shaving top of head',
        price: '15'
    }, 
    {
        name: 'beard trim',
        price: '25'
    }, 
    {
        name: 'singe',
        price: '19'
    }, 
    {
        name: 'tonic hair dressing or oils',
        price: '15'
    }, 
    {
        name: 'face massage',
        price: '17'
    }, 
    {
        name: 'head or neck massage',
        price: '07'
    },
]


const data = {
    links,
    services,
    priceList
}

export default data