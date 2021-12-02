import { React } from 'react';
import { Stage, Layer, Line } from 'react-konva';
import { useEffect, useState, useRef } from 'react';
import './drawing.css';

function D(){
    const canvasRef= useRef(null)
    const contextRef=useRef(null)
    const[isDrawing,setIsDrawing] = useState(false)
    useEffect(()=>{
        const canvas= canvasRef.current;
        canvas.width=window.innerWidth*2;
        canvas.height=window.innerHeight*2;
        canvas.style.width=`${window.innerWidth}px`;
        canvas.style.height=`${window.innerHeight}px`;
        const context=canvas.getContext('2d')
        context.scale(2,2)
       
        context.lineCap='round'
        context.strokeStyle="#55455"
        context.linewidth=5
        contextRef.current=context
    },[])

    const startDrawing = (nativeElement)=> {
        const{offsetX,offsetY}=nativeElement;
        contextRef.current.beginPath()
        contextRef.current.moveTo(offsetX,offsetY)
        setIsDrawing(true)

    }
    const finishDrawing = ()=> {
        contextRef.current.closePath()
        setIsDrawing(false)
    }
    const draw = (nativeElement)=> {
        if(!isDrawing){
            return
        }
        const{offsetX,offsetY}=nativeElement;
        contextRef.current.lineTo(offsetX,offsetY)
        contextRef.current.stroke()
        
    }
    return(
        <div>
        <h1>Draw Here</h1>
        
        <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}

        />
        </div>
    )
}
export default D;