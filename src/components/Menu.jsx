import { useState } from 'react'
import { HiDownload } from 'react-icons/hi'

function Menu() {
  const [activeCategory, setActiveCategory] = useState('brunch')
  const [activeSubcategory, setActiveSubcategory] = useState('desayunos')

  // Datos del menú organizados por categoría principal
  const menuData = {
    brunch: {
      name: 'Brunch & Brush',
      schedule: '9:00 AM - 2:00 PM',
      icon: '🌅',
      subcategories: {
        ligero: {
          name: 'Ligero',
          items: [
            { name: 'Yogurt de Berries', description: 'Yogurt natural (150ml) con granola y berries', price: '$75', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop' },
            { name: 'Coctel Volteado', description: 'Fruta de temporada (250g), granola y miel', price: '$65', image: 'https://images.unsplash.com/photo-1564093497595-593b96d80180?w=400&h=400&fit=crop' },
            { name: 'Relleno Bisket', description: 'Bisket relleno de claras de huevo y rajas, con aguacate, bañadas en salsa de tu elección', price: '$110', image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=400&fit=crop', featured: true },
          ]
        },
        desayunos: {
          name: 'Desayunos',
          items: [
            { name: 'Divorciados', description: '2 huevos con salsa de mole y chile curtido cremoso, acompañados de frijoles', price: '$95', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=400&fit=crop' },
            { name: 'Majados Argentinos', description: '2 huevos estrellados bañados en salsa majada, frijoles y salchicha argentina', price: '$120', image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=400&fit=crop' },
            { name: 'Mexicano', description: 'Huevo con jamón o champiñones, papas con chorizo y frijoles', price: '$95', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=400&fit=crop' },
            { name: 'Machacado', description: 'Huevo con machaca, quesadilla, pico de gallo y frijoles', price: '$150', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=400&fit=crop' },
            { name: 'Gabacho', description: 'Huevos con tocino, papas con mantequilla y hotcakes', price: '$140', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop' },
            { name: 'Clásico Galerish', description: 'Dos huevos al gusto, porción de chilaquiles y frijoles refritos', price: '$95', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=400&fit=crop' },
            { name: 'Club Sandwich', description: 'Con pan de caja hecho en casa, acompañado de chips', price: '$138', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=400&fit=crop' },
          ]
        },
        chilaquiles: {
          name: 'Chilaquiles',
          description: 'Acompañados de frijoles, queso, crema, cebolla curtida y cilantro',
          items: [
            { name: 'Orden de Chilaquiles', description: 'Bien servida. Salsas: chile curtido cremosa, chipotle cremosa, mole o poblana cremosa', price: '$110', image: 'https://images.unsplash.com/photo-1599974925570-27f0b8c6c5f9?w=400&h=400&fit=crop' },
            { name: 'Media Orden', description: 'Perfecta para acompañar', price: '$65', image: 'https://images.unsplash.com/photo-1599974925570-27f0b8c6c5f9?w=400&h=400&fit=crop' },
          ],
          extras: [
            { name: 'Arrachera', price: '+$45' },
            { name: 'Chicharrón Prensado', price: '+$35' },
            { name: 'Chilorio', price: '+$45' },
            { name: 'Huevo Estrellado', price: '+$17' },
            { name: 'Pollo', price: '+$40' },
            { name: 'Salchicha Argentina', price: '+$45' },
          ]
        },
        crunchy: {
          name: 'Crunchy',
          items: [
            { name: 'Enfrijoladas', description: 'Rellenas de huevo, rajas, chorizo y queso', price: '$133', image: 'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?w=400&h=400&fit=crop' },
            { name: 'Crepa Wrap', description: 'Crepa rellena de omelet con jamón en salsa de frijol, con papas con chorizo', price: '$129', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&h=400&fit=crop', featured: true },
            { name: 'Bisquet Chilango', description: 'Bisquet con frijoles y chilaquiles al gusto', price: '$129', image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=400&fit=crop' },
            { name: 'Toast Chilorio', description: 'Pan tostado con puré de frijol, chilorio, cebolla caramelizada, crema y aguacate', price: '$135', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=400&fit=crop', featured: true },
            { name: 'Sampler Galerish', description: '2 huevos al gusto, salchicha argentina, chilaquiles, frijoles, 1 quesadilla y ensalada', price: '$150', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=400&fit=crop' },
          ]
        },
        sugar: {
          name: 'Sugar',
          items: [
            { name: 'Hotcake Crepa', description: 'Crepa rellena de hotcakes con plátano y dulce de leche', price: '$125', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop', featured: true },
            { name: 'OG Hotcakes', description: '3 hotcakes con almendra caramelizada, fruta, maple y crema pastelera', price: '$130', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop' },
            { name: 'Arma tu Waffle', description: 'Elige tus toppings: dulces (caramelo, chocolate, nutella, lechera, crema de cacahuate, miel de maple) y frutas (fresa, berries, plátano, fruta de temporada)', price: '$110', image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&h=400&fit=crop' },
          ]
        },
      }
    },
    paintplate: {
      name: 'Paint & Plate',
      schedule: '2:00 PM - 10:00 PM',
      icon: '🎨',
      subcategories: {
        openers: {
          name: 'Openers',
          items: [
            { name: 'Nachos', description: 'Totopos con frijoles, guacamole y salchicha argentina, con queso y aderezos', price: '$160', image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&h=400&fit=crop' },
            { name: 'Ceviche Sunset', description: 'Camarón con mango y vegetales, salsa de jamaica con limón, sobre una pieza de chicharrón', price: '$220', image: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=400&h=400&fit=crop' },
            { name: 'Aguachile', description: 'Camarón curtido con limón, pepino y salsas negras', price: '$240', image: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=400&h=400&fit=crop' },
            { name: 'Guacapuerco', description: 'Chicharrón con guacamole y mexicana', price: '$110', image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=400&fit=crop' },
            { name: 'Mini Trio', description: '3 sliders: carne, chorizo y pollo empanizado con papas naturales o con queso amarillo', price: '$295', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=400&fit=crop' },
          ]
        },
        greens: {
          name: 'Greens',
          items: [
            { name: 'Camarón Crunchy', description: 'Camarón empanizado, mix de lechugas y vinagreta de café con caramelo', price: '$220', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop' },
            { name: 'Red n Sweet', description: 'Ensalada con frutos rojos, queso de cabra y almendra caramelizada', price: '$120', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop' },
          ]
        },
        foodie: {
          name: 'Foodie',
          items: [
            { name: 'Pizza Boneless', description: 'BBQ o buffalo, con aderezo de chipotle y queso, con papas francesas', price: '$250', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop' },
            { name: 'Pizza Pampa', description: 'Salchicha argentina, chilorio y mix de quesos', price: '$240', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop' },
            { name: 'Pizza Shrimp', description: 'Camarón con pimientos, cebolla y tocino', price: '$280', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop' },
            { name: 'Tacos Arracheese', description: 'Dos tacos de arrachera, costra de queso y cebolla', price: '$120', image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=400&fit=crop' },
            { name: 'Gringa', description: '1/2 quesadilla de harina con arrachera, cebolla caramelizada y chile toreado', price: '$120', image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=400&fit=crop' },
            { name: 'Tacos Gobernador', description: 'Tres tacos de camarón con queso gratinado y verdura', price: '$150', image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=400&fit=crop' },
            { name: 'Clasic Burger', description: 'Pan brioche, carne, tocino y queso chihuahua, acompañada de papas francesas', price: '$179', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop' },
            { name: 'Burger Buff', description: 'Pan brioche, carne, tocino, queso amarillo y boneless buffalo, acompañada de papas francesas', price: '$240', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop' },
          ]
        },
        munchies: {
          name: 'Munchies',
          items: [
            { name: 'Papas', description: 'Elige: queso amarillo, parmesano, pimienta limón o búfalo', price: '$90', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=400&fit=crop' },
            { name: 'Boneless', description: 'En salsa BBQ o buffalo, con vegetales y aderezo', price: '$125', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=400&fit=crop' },
            { name: 'Dogo Argentino', description: 'Pan artesanal, chorizo argentino, chimichurri, pepinillos y papas a la francesa', price: '$130', image: 'https://images.unsplash.com/photo-1612392062798-2dbad8c4d6e0?w=400&h=400&fit=crop', featured: true },
            { name: 'Club Sandwich', description: 'Con pan de caja hecho en casa y chips', price: '$138', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=400&fit=crop' },
            { name: 'Mix Dulce', description: 'Surtido de gomitas, rielitos, miguelito y chamoy', price: '$80', image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=400&h=400&fit=crop' },
            { name: 'Mix de Papas', description: 'Con papitas, cacahuate, chicharrón, pepino y salsas', price: '$80', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=400&fit=crop' },
          ]
        },
      }
    },
    coffee: {
      name: 'Coffee Bar',
      schedule: 'Todo el día',
      icon: '☕',
      subcategories: {
        espresso: {
          name: 'Espresso',
          items: [
            { name: 'Espresso Doble', description: 'Shot doble de espresso', price: '$40', image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=400&fit=crop' },
            { name: 'Flat White', description: '6 oz de perfección', price: '$55', image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=400&h=400&fit=crop' },
            { name: 'Cappuccino', description: '8 oz clásico italiano', price: '$57', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop' },
            { name: 'Cappuccino Clásico', description: '12 oz caliente / 16 oz frío', price: '$62 / $75', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop' },
            { name: 'Latte', description: '12 oz suave y cremoso', price: '$65', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop' },
            { name: 'Americano', description: '12 oz caliente / 16 oz frío', price: '$45 / $50', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop' },
            { name: 'Moka', description: '12 oz caliente / 16 oz frío', price: '$76 / $85', image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=400&fit=crop' },
          ]
        },
        galeritos: {
          name: 'Galeritos',
          description: 'Con espresso - 12 oz caliente $75 / 16 oz frío o frappé $83',
          items: [
            { name: 'Caramelo Salado', description: 'Espresso con caramelo salado', price: '$75 / $83', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop' },
            { name: 'Pistachio', description: 'Espresso con crema de pistacho', price: '$75 / $83', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop' },
            { name: 'Lavanda Latte', description: 'Espresso con esencia de lavanda', price: '$75 / $83', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop' },
            { name: 'Coconutte', description: 'Espresso con coco', price: '$75 / $83', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop' },
            { name: 'Dirty Chai', description: 'Chai con shot de espresso', price: '$75 / $83', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop' },
          ]
        },
        sincafe: {
          name: 'Sin Café',
          description: '12 oz caliente / 16 oz frío',
          items: [
            { name: 'Chai Latte', description: 'Durazno, coco, lavanda, pistache, vainilla o menta', price: '$65 / $79', image: 'https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?w=400&h=400&fit=crop' },
            { name: 'Chocolate', description: 'Chocolate caliente cremoso', price: '$69 / $82', image: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=400&h=400&fit=crop' },
            { name: 'Tisana', description: 'Fresa kiwi, tropical o frutos rojos', price: '$53 / $57', image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=400&h=400&fit=crop' },
            { name: 'Matcha', description: 'Regular, lavanda, durazno o blueberries', price: '$73 / $83', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=400&fit=crop' },
          ]
        },
        frappes: {
          name: 'Frappés',
          description: 'Bebidas frías y cremosas - $85',
          items: [
            { name: 'Cappuccino Frappé', description: 'Clásico de café', price: '$85', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop' },
            { name: 'Moka Frappé', description: 'Café con chocolate', price: '$85', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop' },
            { name: 'Chai Frappé', description: 'Especiado y dulce', price: '$85', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop' },
            { name: 'Caramelo Frappé', description: 'Dulce y cremoso', price: '$85', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop' },
            { name: 'Cookies & Cream', description: 'Con galleta oreo', price: '$85', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop' },
            { name: 'Chocoreta', description: 'Chocolate intenso', price: '$85', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop' },
          ]
        },
        especiales: {
          name: 'Frappés Especiales',
          description: 'Premium - $115',
          items: [
            { name: 'Ferrero', description: 'Sabor a ferrero rocher', price: '$115', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop' },
            { name: 'Mazapán', description: 'Dulce mexicano', price: '$115', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop' },
            { name: 'Snickers', description: 'Chocolate, caramelo y cacahuate', price: '$115', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop' },
            { name: 'Kinder', description: 'Cremoso y suave', price: '$115', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop' },
          ]
        },
        fizzers: {
          name: 'Fizzers & Bebidas',
          items: [
            { name: 'Soda Italiana', description: 'Manzana verde, durazno, maracuyá o mora azul', price: '$69', image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=400&fit=crop' },
            { name: 'Limonada o Naranjada', description: 'Natural o mineral', price: '$40', image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=400&fit=crop' },
            { name: 'Iglú', description: 'Smoothie de frutas (fresa, mango, maracuyá, mora azul) normal o picosito', price: '$68', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop' },
          ]
        },
        mocktails: {
          name: 'Mocktails',
          description: 'Coctelería sin alcohol - 16 oz',
          items: [
            { name: 'Cucu', description: 'Mojito de pepino', price: '$72', image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=400&fit=crop' },
            { name: 'Pash', description: 'Mojito de maracuyá', price: '$72', image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=400&fit=crop' },
            { name: 'Dark Mojito', description: 'Mojito + espresso', price: '$75', image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=400&fit=crop' },
            { name: 'Tonic', description: 'Espresso + agua tónica', price: '$70', image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=400&fit=crop' },
            { name: 'Sunset', description: 'Espresso + jugo de naranja', price: '$70', image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=400&fit=crop' },
            { name: 'Lemon Berrie', description: 'Limón + frutos rojos + lavanda', price: '$65', image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=400&fit=crop' },
          ]
        },
      }
    },
    sweets: {
      name: 'Sweets',
      schedule: 'Todo el día',
      icon: '🧁',
      subcategories: {
        postres: {
          name: 'Postres',
          items: [
            { name: 'Pay', description: 'Pregunta por sabores disponibles', price: '$95', image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&h=400&fit=crop' },
            { name: 'Brownie', description: 'Chocolate intenso', price: '$60', image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&h=400&fit=crop' },
            { name: 'Brownie sin Azúcar', description: 'Opción saludable', price: '$75', image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&h=400&fit=crop' },
            { name: 'New York Cookie', description: 'Galleta estilo americano', price: '$45', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop' },
            { name: 'Rol de Canela', description: 'Glaseado de queso crema, dulce de leche y nuez', price: '$50', image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&h=400&fit=crop' },
            { name: 'Rebanada de Pastel', description: 'Pregunta por sabores disponibles', price: '$85', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop' },
            { name: 'Macaron', description: 'Pregunta por sabores disponibles - PROMO 5x$100', price: '$25', image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&h=400&fit=crop' },
          ]
        },
      }
    },
  }

  // Obtener las categorías principales
  const mainCategories = Object.keys(menuData).map(key => ({
    id: key,
    ...menuData[key]
  }))

  // Obtener subcategorías de la categoría activa
  const currentCategory = menuData[activeCategory]
  const subcategories = Object.keys(currentCategory.subcategories).map(key => ({
    id: key,
    ...currentCategory.subcategories[key]
  }))

  // Cambiar categoría principal y resetear subcategoría
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
    const firstSubcategory = Object.keys(menuData[categoryId].subcategories)[0]
    setActiveSubcategory(firstSubcategory)
  }

  // Obtener items actuales
  const currentSubcategory = currentCategory.subcategories[activeSubcategory]
  const currentItems = currentSubcategory?.items || []

  return (
    <section id="menu" className="py-20 px-4 bg-galerie-cream">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-galerie-brown mb-4">
            Nuestro Menú
          </h2>
          <div className="w-24 h-1 bg-galerie-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 mb-6">
            Descubre nuestras deliciosas opciones
          </p>
          
          {/* Botón de descarga */}
          <a
            href="docs/PDF/Newmenu.pdf"
            download="Menu-Galerie-Coffee.pdf"
            className="inline-flex items-center gap-2 bg-galerie-blue hover:bg-galerie-blue/90 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            <HiDownload className="text-xl" />
            Descargar Menú PDF
          </a>
        </div>

        {/* Categorías principales */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {mainCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-galerie-green text-white shadow-lg'
                  : 'bg-white text-galerie-brown hover:bg-galerie-green/10 shadow'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Horario de la categoría */}
        <div className="text-center mb-6">
          <span className="inline-block bg-galerie-brown/10 text-galerie-brown px-4 py-2 rounded-full text-sm font-medium">
            🕐 {currentCategory.schedule}
          </span>
        </div>

        {/* Subcategorías */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {subcategories.map((subcategory) => (
            <button
              key={subcategory.id}
              onClick={() => setActiveSubcategory(subcategory.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeSubcategory === subcategory.id
                  ? 'bg-galerie-brown text-white'
                  : 'bg-white/50 text-galerie-brown hover:bg-white'
              }`}
            >
              {subcategory.name}
            </button>
          ))}
        </div>

        {/* Descripción de subcategoría si existe */}
        {currentSubcategory?.description && (
          <p className="text-center text-gray-600 mb-8 italic">
            {currentSubcategory.description}
          </p>
        )}

        {/* Items del menú */}
        <div className="grid md:grid-cols-2 gap-6">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 ${
                item.featured ? 'ring-2 ring-galerie-green' : ''
              }`}
            >
              <div className="flex gap-4 p-5">
                {/* Imagen */}
                {item.image && (
                  <div className="flex-shrink-0 relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-24 h-24 object-cover rounded-xl"
                    />
                    {item.featured && (
                      <span className="absolute -top-2 -right-2 text-lg">⭐</span>
                    )}
                  </div>
                )}

                {/* Contenido */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="text-lg font-bold text-galerie-brown leading-tight">
                      {item.name}
                    </h3>
                    <span className="text-lg font-bold text-galerie-green whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extras para chilaquiles */}
        {activeSubcategory === 'chilaquiles' && currentSubcategory?.extras && (
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-md">
            <h4 className="text-lg font-bold text-galerie-brown mb-4">
              🥩 Agregar Proteína
            </h4>
            <div className="flex flex-wrap gap-3">
              {currentSubcategory.extras.map((extra, index) => (
                <span
                  key={index}
                  className="bg-galerie-cream px-4 py-2 rounded-full text-sm"
                >
                  {extra.name} <span className="font-semibold text-galerie-green">{extra.price}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Nota sobre esencias y leches (para café) */}
        {activeCategory === 'coffee' && (
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold text-galerie-brown mb-3">
                  ✨ Esencias +$10
                </h4>
                <p className="text-gray-600 text-sm">
                  Avellana, menta, caramelo, caramelo sin azúcar, vainilla, vainilla sin azúcar, irish cream sin azúcar
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-galerie-brown mb-3">
                  🥛 Opciones de Leche
                </h4>
                <p className="text-gray-600 text-sm">
                  Entera (incluida) • Deslactosada light +$5 • Avena +$10 • Coco +$10 • Almendra +$10
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Menu
