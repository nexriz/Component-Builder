import React, { useEffect, useRef, useState, useCallback, useContext, useMemo, createContext, useReducer, } from 'react'
import Konva from 'konva';
import useTransformer from '../hooks/useTransformer'
import getDragDirection from '../utils/getDragDirection'
import KonvaContext from '../context/konvacontext'
import Structure from './Structure'


function Rect(props) {
    const { attrs, layer, stage } = props
  
    const rect = useMemo(() => new Konva.Rect(attrs), [])
  

    useTransformer(rect, layer, stage, { 
      disabled: attrs.name === "background",
      name: attrs.name + "_transformer",
    })

    
  

    
  
    useEffect(() => {     
      console.log(attrs)
      if(attrs.name === "background") {
        rect.draggable(false)
      }
      
      rect.on("transform", () => {
        // console.log(rect.attrs)
      })
      
      return () => {
        layer.remove(rect)
      }
    },[])
  
  
  
  
  
    if(!props.children || !Array.isArray(props.children)) return null
  
    return props.children.map(struct => {
      return <Structure {...struct} />
    })
  
  }

  
  export default Rect