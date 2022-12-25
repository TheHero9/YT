//Import needed files
import React, { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas, useFrame, useLoader} from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars,Text3D, KeyboardControls, Text, Billboard, RoundedBox} from '@react-three/drei';
import * as THREE from "three"
import './App.css'




//Import components
import Planes from '/src/Planes.jsx';
// import Floor from './assets/Floor';
// import {Texts} from './assets/Texts';
// import Loader from './assets/Loader';
import ExperienceSection from "/src/ExperienceSection.jsx"
// import Project from "/src/ProjectsSection.jsx"
import ProjectsSection from '/src/ProjectSection';
// import EducationSection from './assets/EducationSection';
// import Roads from './assets/Roads';
// import MyRoomSection from './assets/MyRoomSection';
// import Decorations from './assets/Decorations';
// import Car from './assets/Car';



function App() {
  return (
    <Canvas>


      <Suspense>
        
      <PerspectiveCamera makeDefault fov={40} zoom={1} position={[0,7,15]}/>
      {/* <primitive object={new THREE.AxesHelper(2)}/> */}

      {/* <Planes/> */}
      {/* <Car/> */}
      {/* <Texts/> */}
      {/* <Text className="hide" depthOffset={20}  fillOpacity={1} position={[0,5,0]}>Hello</Text> */}

      {/* <Floor/> */}
      {/* <Decorations/> */}

    {/* Lake*/}
    {/* <primitive object={lake} rotation={[0,0,0]} position={[8.1,-1.4,-8.1]} /> */}
      
      <ExperienceSection/>
      <ProjectsSection/>
      {/* <EducationSection/> */}

      {/* <MyRoomSection/> */}

      {/* <Roads/> */}

      <ambientLight/>
      <Stars/>
      <OrbitControls/>

      <pointLight position={[7,0,0]}/>
      </Suspense>

      {/* </KeyboardControls> */}
    </Canvas>
  )
}

export default App
