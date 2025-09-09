import { View, Text, Image } from 'react-native';

import styles from './styles';

import img from '../../../assets/ferrari.jpg'
import img1 from '../../../assets/kwid.png'
import img2 from '../../../assets/mustang.jpg'
import img3 from '../../../assets/lamborguini.jpg'

import Card from './card';

function Exemplo02 (){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Loja Oficial dos Carros Da hora</Text>
            
            <Card
                imagem={img1}
                nome={'KWID'}
                descricao={'Carrinho de vagabundo'}
                valor={'R$1.000.000,99'}> 
            </Card>

            <Card
                imagem={img}
                nome={'Ferrari top'}
                descricao={'A mais linda e veloz'}
                valor={'R$39,90'}> 
            </Card>

             <Card
                imagem={img2}
                nome={'Mustangão'}
                descricao={'Muitos cavalos de potência'}
                valor={'R$435,98'}> 
            </Card>

             <Card
                imagem={img3}
                nome={'Lã Borguini'}
                descricao={'Touro super descolado'}
                valor={'R$1245,76'}> 
            </Card>
        </View>
    );
}

export default Exemplo02;
