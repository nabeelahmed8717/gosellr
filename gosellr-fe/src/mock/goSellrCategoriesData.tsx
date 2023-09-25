import ElectronicsIcon from "../assets/categoryIcons/electronics.svg"
import BeautyIcon from "../assets/categoryIcons/Beauty.svg"
import BooksIcon from "../assets/categoryIcons/Books.svg"
import ClothingIcon from "../assets/categoryIcons/Clothing.svg"
import FurnitureIcon from "../assets/categoryIcons/Furniture.svg"
import HomeAppliancesIcon from "../assets/categoryIcons/HomeAppliances.svg"
import MusicIcon from "../assets/categoryIcons/Music.svg"
import OutdoorIcon from "../assets/categoryIcons/Outdoor.svg"
import PetIcon from "../assets/categoryIcons/Pet.svg"
import SportsEquipmentIcon from "../assets/categoryIcons/SportsEquipment.svg"
import ToysIcon from "../assets/categoryIcons/Toys.svg"


export const categories = [
    {
        id: 1,
        icon: ElectronicsIcon,
        name: 'Electronics',
        subcategories: [
            {
                name: 'Phones',
                subcategories: ['Apple', 'Samsung', 'Google'],
            },
            {
                name: 'Laptops',
                subcategories: ['Dell', 'HP', 'Lenovo'],
            },
            {
                name: 'Accessories',
                subcategories: ['Headphones', 'Chargers', 'Cases'],
            },
        ],
    },
    {
        id: 2,
        icon: ClothingIcon,
        name: 'Clothing',
        subcategories: [
            {
                name: 'Men',
                subcategories: ['Shirts', 'Pants', 'Shoes'],
            },
            {
                name: 'Women',
                subcategories: ['Dresses', 'Tops', 'Skirts'],
            },
            {
                name: 'Kids',
                subcategories: ['Boys', 'Girls'],
            },
        ],
    },
    {
        id: 3,
        icon: FurnitureIcon,
        name: 'Furniture',
        subcategories: [
            {
                name: 'Living Room',
                subcategories: ['Sofas', 'Coffee Tables', 'TV Stands'],
            },
            {
                name: 'Bedroom',
                subcategories: ['Beds', 'Dressers', 'Nightstands'],
            },
            {
                name: 'Kitchen',
                subcategories: ['Dining Tables', 'Chairs', 'Cabinets'],
            },
        ],
    },
    {
        id: 4,
        icon: BooksIcon,
        name: 'Books',
        subcategories: [
            {
                name: 'Fiction',
                subcategories: ['Mystery', 'Science Fiction', 'Romance'],
            },
            {
                name: 'Non-Fiction',
                subcategories: ['Self-Help', 'History', 'Cookbooks'],
            },
        ],
    },
    {
        id: 5,
        icon: ToysIcon,
        name: 'Toys',
        subcategories: [
            {
                name: 'Action Figures',
                subcategories: ['Superheroes', 'Cartoon Characters', 'Dinosaurs'],
            },
            {
                name: 'Board Games',
                subcategories: ['Strategy', 'Family', 'Party'],
            },
        ],
    },
    {
        id: 6,
        icon: HomeAppliancesIcon,
        name: 'Home Appliances',
        subcategories: [
            {
                name: 'Kitchen Appliances',
                subcategories: ['Microwaves', 'Blenders', 'Coffee Makers'],
            },
            {
                name: 'Laundry Appliances',
                subcategories: ['Washing Machines', 'Dryers', 'Ironing'],
            },
        ],
    },
    {
        id: 7,
        icon: SportsEquipmentIcon,
        name: 'Sports Equipment',
        subcategories: [
            {
                name: 'Team Sports',
                subcategories: ['Soccer', 'Basketball', 'Football'],
            },
            {
                name: 'Individual Sports',
                subcategories: ['Tennis', 'Golf', 'Cycling'],
            },
        ],
    },
    {
        id: 8,
        icon: BeautyIcon,
        name: 'Beauty Products',
        subcategories: [
            {
                name: 'Skincare',
                subcategories: ['Cleansers', 'Moisturizers', 'Serums'],
            },
            {
                name: 'Makeup',
                subcategories: ['Lipstick', 'Foundation', 'Mascara'],
            },
        ],
    },
    {
        id: 9,
        icon: MusicIcon,
        name: 'Music',
        subcategories: [
            {
                name: 'Genres',
                subcategories: ['Rock', 'Pop', 'Hip-Hop'],
            },
            {
                name: 'Instruments',
                subcategories: ['Guitar', 'Piano', 'Drums'],
            },
        ],
    },
    {
        id: 10,
        icon: OutdoorIcon,
        name: 'Outdoor Gear',
        subcategories: [
            {
                name: 'Camping',
                subcategories: ['Tents', 'Sleeping Bags', 'Cooking'],
            },
            {
                name: 'Hiking',
                subcategories: ['Backpacks', 'Boots', 'Trekking Poles'],
            },
        ],
    },
    {
        id: 11,
        icon: PetIcon,
        name: 'Pet Supplies',
        subcategories: [
            {
                name: 'Dogs',
                subcategories: ['Food', 'Toys', 'Grooming'],
            },
            {
                name: 'Cats',
                subcategories: ['Food', 'Toys', 'Litter Boxes'],
            },
        ],
    },
    // Add more categories as needed
];

// You now have 11 objects in the categories array.
