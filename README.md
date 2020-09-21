# Volt - Blazingly Fast DX in Building Svelte Apps

![pic-full-200921-1811-23](https://user-images.githubusercontent.com/55337687/93755505-00330a80-fc36-11ea-959e-31586f17de45.png)


## Stacks
- Svite Bundler (Web Apps)
- Svelte
- TailwindCSS
- TailwindUI
- Typescript
- Tauri Bundler (Building Desktop Apps)

## Web Development (Master Branch)
- yarn
- yarn dev

## Production
- yarn build


## [Desktop Development](https://tauri.studio/en/docs/usage/development/integration) (Tauri Branch)

> Assuming you have properly set up RUSTUP and Tauri Bundler

> Install Tauri globally
- npm install -g tauri

> Create a New Tauri Apps
- tauri init

> Check Configuration is Correct 

**since we build our app at dist folder, and run our app at localhost:3000**

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
