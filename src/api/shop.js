/**
 * Mocking client-server processing
 */
const _products = [{
    'id': 1,
    'title': 'Вытяжное устройство G2H',
    'description': '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
    'code': 'Артикул: G2H1065',
    'price': 12644,
    'img': 'https://res.cloudinary.com/dbpxrjaqi/image/upload/v1617958052/1_dzrssm.png',
    'inventory': 2
  },
  {
    'id': 2,
    'title': 'Вытяжное устройство G2H',
    'description': '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
    'code': 'Артикул: G2H1065',
    'price': 12644,
    'img': 'https://res.cloudinary.com/dbpxrjaqi/image/upload/v1617958053/2_ylorqt.png',
    'inventory': 1
  },
  {
    'id': 3,
    'title': 'Вытяжное устройство G2H',
    'description': '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
    'code': 'Артикул: G2H1065',
    'price': 12644,
    'img': 'https://res.cloudinary.com/dbpxrjaqi/image/upload/v1617958053/3_djzomr.png',
    'inventory': 1
  },
]

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.webdriver) ?
      cb(): errorCb()
    }, 100)
  }
}