import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from './styles';
import IntroImg from './../../../../assets/intro-img.png';
import { RegularText } from '../../../../components/Header/typography';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { InfoWithIcon } from '../../../../components/InfoWithIcon';

const Intro: React.FC = () => {
  const { colors } = useTheme()
  return (
     <IntroContainer>
      <IntroContent className='container' >
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia 
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3" >
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
             
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              iconBg={colors['brand-yellow-dark']}
              icon={<ShoppingCart weight='fill' />}
              text="Compra simples e facil"
            />
            <InfoWithIcon
              iconBg={colors['base-text']}
              icon={<Package weight='fill' />}
              text="Embalagem mantém o café intacto"
            />
            <InfoWithIcon
              iconBg={colors['brand-yellow']}
              icon={<Timer weight='fill' />}
              text="Entrega rápida e rastreada"
            />
            <InfoWithIcon
              iconBg={colors['brand-purple']}
              icon={<Coffee weight='fill' />}
              text="O café chega fresquinho até você"
            />
          </BenefitsContainer>
        </div>
        <img src={IntroImg} />
      </IntroContent>
     </IntroContainer>
  );
}

export default Intro;
