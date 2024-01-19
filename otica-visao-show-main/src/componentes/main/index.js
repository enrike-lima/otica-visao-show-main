import React from "react";
import Banner from "./banner";
import Produtos from "./produtos";
import Sobre from "./sobre";
import Contato from "./contato";


export default function Main(){
    return(
        <main >
           <Banner/>
           <Produtos/>
           <Sobre/>
           <Contato/>
           <button className='topo-btn'><a href="#Topo"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAeZJREFUaEPtlUlKBEEQRV873sc7CIo4jzghohvd6Na9uNSdCOJCnOcBUfACXslZAjKhKLqqszIjkYbsZVdGxH//R2XVaPJfrcn1kwD+O8GUQEog0IG0QoEGBpenBIItDGyQEgg0MLg8dgKdRuF7sNKCBjEBOoB7M3cQ+IgBEQvAiu8xol+AKBAxAPLirfEC0Q98aSahDdAGPALW+bzWB2BUE0ITQMRfAwMNHFaF0AJwFW/Z1CA0AFqBGwfn663TCPAd8k6EAoj4M2DMU8QVMBUCEQIg4k+B8RLxz+ZZb8mZc2DGF8IXwMX5V6DPCH8CuksgJIlJ4Kdqkj4ALYC4VrY2IngY+DSC2oHbDFA9ncfAfFWIqgAi/tBEXmSWiB+qc9fLTXWnDVEFwEW8uDxR8qFyhZgDfl3WyRXAVby80I2uRYG4MCtWpPEAWHKBcAWQc/vAYsFEuUpnHcTbcrkELksgdoFVTQA7eBtYy0GI+GmXYbk6gTgy34Hsoy1gw2V95IxrAtl+0nzT/CEv9IKHeNtP5p9kINaBHVfxvgBStwJ0AcsB4rMQsvNvwF4V8SEAVedEO++zQtHE+DROAD6uadakBDTd9OmVEvBxTbMmJaDppk+vlICPa5o1KQFNN316pQR8XNOs+QPZM00xCTMrRwAAAABJRU5ErkJggg==" alt="seta" /></a></button>
          

           
          
        </main>
    );
}