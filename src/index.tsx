import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {App} from './App';
import {GraphQlServer} from "./graphQlServer";

const container = document.getElementById('eneyida');
const root = createRoot(container!);

root.render(<GraphQlServer component={<App/>}/>);
