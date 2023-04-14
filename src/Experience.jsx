import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Door from './Door'
import Sphere from './Circle'
import Floor from './Floor'
import { useHelper } from '@react-three/drei'
import { DirectionalLightHelper, HemisphereLightHelper, PointLightHelper, SpotLightHelper  } from 'three';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';
import { useRef } from 'react'
import { HemisphereLight, PointLight, RectAreaLight, SpotLight } from 'three'

export default function Experience() {
    const directionalLightRef = useRef()
    const hemisphereLightRef = useRef()
    const pointLightRef = useRef()
    const rectAreaLightRef = useRef()
    const spotLightRef = useRef()

    // useHelper(directionalLightRef, DirectionalLightHelper, 1)
    // useHelper(hemisphereLightRef, HemisphereLightHelper, 0.5)
    // useHelper(pointLightRef, PointLightHelper, 0.5)
    // useHelper(rectAreaLightRef, RectAreaLightHelper, 0.5)
    useHelper(spotLightRef, SpotLightHelper, 0.5)

    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        {/* <directionalLight ref={directionalLightRef} position={[0, 5, -3]} intensity={1.5} castShadow />
        <hemisphereLight ref={hemisphereLightRef} args={['#FFFFFF', '#000000', 0.5]} />
        <pointLight ref={pointLightRef} position={[3, 3, 3]} color={'#FFFFFF'} />
        <rectAreaLight ref={rectAreaLightRef} position={[0, 4, 0]} args={[4, 4, 4, 4]} intensity={1.5} castShadow /> */}
        <spotLight ref={spotLightRef} position={[-3, 3, 3]} angle={0.3} penumbra={1} color={'#FFFFFF'} />
        <ambientLight intensity={0.5} />
        <Door />
        <Sphere />
        <Floor />
    </>
}