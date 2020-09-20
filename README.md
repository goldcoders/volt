# Volt - Blazingly Fast DX in Building Svelte Apps

## Stacks
- Svite Bundler (Web Apps)
- Svelte
- TailwindCSS
- TailwindUI
- Typescript
- Tauri Bundler (Building Desktop Apps)

## Web Development
- yarn
- yarn dev

## Production
- yarn build


## [Using with Tauri](https://tauri.studio/en/docs/usage/development/integration)

> Assuming you have properly set up RUSTUP and Tauri Bundler

> Install Tauri globally
- npm install -g tauri

> Create a New Tauri Apps
- tauri init

> Check Configuration is Correct 
** since we are using dist for bundling our app and localhost:3000 **

//tauri.conf.json
```
"build": {
"distDir": "../dist",
"devPath": "http://localhost:3000",

}
```

> Tauri App Development 
- yarn dev && tauri dev 

> Compiling Desktop App Executables
- yarn build && tauri build
