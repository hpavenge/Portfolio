1. created with -> npm create vite@latest ./ -- --template react
2. added tailwind -> 
3. added 3d libraries -> npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
4. added tailwind fix for combination with 3de -> npm install -D --legacy-peer-deps postcss autoprefixer
5. added own fix needed with -> npm install --legacy-peer-deps three
6. added hoc folder high order component (zodat alles dezelfde breedte heeft naar de rand toe) after this in all component we can do export default SectionWrapper(About, "about"); so it applies to all
7. Three.js for 3d models see Docs

Docs: 
https://tailwindcss.com/docs/flex
https://docs.pmnd.rs/react-three-fiber/getting-started/your-first-scene#adding-lights


Info nick:
3d models download google for models
computers.jsx position plaatst het op de site -> position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
https://sketchfab.com/3d-models?date=week&features=downloadable&sort_by=-likeCount

create 3d model from photo for three js: 
https://models.readyplayer.me/652911d933835c7bfb75740b.glb
https://dev.to/nourdinedev/how-to-use-threejs-and-react-to-render-a-3d-model-of-your-self-4kkf

Readme to turn react app into github hosted page:
https://github.com/gitname/react-gh-pages

    "deploy": "gh-pages -d dist" (changed to dist thanks to vite outputting build in dist folder instead of build folder)


    Run app with -> npm run dev


    Deploy app to pages with -> npm run deploy




