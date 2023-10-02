import React, { StrictMode } from "react";
import {createRoot} from 'react-dom/client' 

const rootContainer = document.querySelector("#root");


if (rootContainer == null) throw new Error("There is not container!");

createRoot(rootContainer).render(

<StrictMode>

    
</StrictMode>




);