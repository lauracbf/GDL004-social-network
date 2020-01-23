// import { modelo } from '../model/index.js'
// import { components, vista} from '../view/index.js';

// export const controler = {
//     initControler: () => {
//       vista.initView()
//     },
  
//     agregarMarcador: (nuevomarcador) => {
//       modelo.agregaMarcador(nuevomarcador) 
//       vista.representarMarcadores(controlador.obtenerMarcadores()); 
//     }, 
  
//     obtenerMarcadores:() => {
//       return modelo.obtenerMarcadores();
//     },
  
//     changeTmp: (hash) => {
//       // const id = hash.split('/')[1];
//       const sectionMain = document.getElementById('container');
//       sectionMain.innerHTML = '';
  
//       switch (hash) {
//           case '':
//           case '#':
//           case '#/':
//               return sectionMain.appendChild(components.login());
//           case '#/home':
//               sectionMain.appendChild(components.home())
//               controlador.initControl()
//           // case '#/accesorios':
//           // case '#/lugares':
//               // { return sectionMain.appendChild(components[id]()); }
//               break;
//           default:
//               return sectionMain.appendChild(components.different())
//       }
//     }
//   }