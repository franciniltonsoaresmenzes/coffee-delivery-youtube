import Inputs from '../../../../components/Inputs';
import { AdressFormContainer } from './styles';

const AdressForm: React.FC = () => {
 return (
   <AdressFormContainer>
    <Inputs placeholder='CEP' type="number" className='cep' />
    <Inputs placeholder='Rua' className='street' />
    <Inputs placeholder='Número' type='number' />
    <Inputs placeholder='Complemento' className='complement' />
    <Inputs placeholder='Bairro' />
    <Inputs placeholder='Cidade' />
    <Inputs placeholder='UF' />
   </AdressFormContainer>
 );
}

export default AdressForm;
