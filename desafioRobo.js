
// verificar se  olhando é igual o comando de direção
//verificar bordas da grid



function movimentoRobo(largura,comprimento,comandos){
  let contCima = 0;
  let contBaixo = 0;
  let contDir = 0;
  let contEsq = 0;
  let olhando = 'F';

  for(i = 0; i < comandos.length; i += 1 ) {
    switch (comandos[i]) {
      case 'F':    
          if( olhando === 'F') {
            if( (contCima - contBaixo) < comprimento ) {
              contCima += 1
            }
            
          } else if ( olhando === 'T') {
            if( (contCima - contBaixo) > 0 ) {
              contBaixo += 1
            }
            
          }  else if ( olhando === 'D') {
            if ((contDir - contEsq) < largura) {
              contDir += 1
            }
            
          }  else if ( olhando === 'E') {
            if ((contDir - contEsq) > 0) {
              contEsq += 1
            }
            
          }
          break
      
        
      case 'T':
      
          if( olhando === 'F') {
            if( (contCima - contBaixo) > 0 ) {
              contBaixo += 1
            }
            
          } else if ( olhando === 'T') {
            if( (contCima - contBaixo) < comprimento ) {
              contCima += 1
            }
            
          }  else if ( olhando === 'D') {
            if( (contEsq - contDir) > 0) {
              contEsq += 1
            }
            
          }  else if ( olhando === 'E') {
            if( (contEsq - contDir) < largura) {
              contDir += 1
            }
            
          }
          break
        
      default:
        if (olhando === 'D') {
          if(comandos[i] === 'D') {
            olhando ='T'
            break
          }
          olhando = 'F'
          break
        } else if (olhando === 'F') {
          if( comandos[i] === 'D') {
            olhando = 'D'
            break
          }
          olhando = 'E'
          break
        } else if(olhando === 'E') {
          if(comandos[i] === 'D') {
            olhando = 'F'
            break
          }
          olhando = 'T'
        } else if(olhando === 'T') {
          if (comandos[i] === 'D') {
            olhando = 'D'
            break
          } 
          olhando = 'E'
          break
        }
  
        break
    }
  };

  if (olhando === 'D') {
    return console.log('L', (contDir - contEsq), (contCima - contBaixo))
  } else if (olhando === 'E') {
    return console.log('O', (contDir - contEsq), (contCima - contBaixo))
  } else if (olhando === 'T') {
    return console.log('S', (contDir - contEsq), (contCima - contBaixo))
  } else {
    return console.log('N', (contDir - contEsq), (contCima - contBaixo))
  }


}

movimentoRobo(1,2,'FFFFT')