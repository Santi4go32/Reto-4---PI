import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Sphere() {
    const PATH = "/static/textures/sphere/"
    
    const props = useTexture({
        map: PATH + 'color.jpg',
        displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'aO.jpg',
        metalnessMap: PATH + 'material.jpg'
    })
    
    return (
        <mesh rotation-y={Math.PI / 12} position={[-2,0,-2]} castShadow>
            <sphereGeometry/>
            <meshStandardMaterial {...props} side={DoubleSide} displacementScale={0.2} />
        </mesh>
    )
}