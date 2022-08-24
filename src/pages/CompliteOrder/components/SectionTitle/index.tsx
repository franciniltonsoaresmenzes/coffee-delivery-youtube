import { ReactNode } from 'react';
import { RegularText } from '../../../../components/Header/typography';
import { SectionTitleContainer } from './styles';

interface SectionTitleProps {
  title: string
  subtitle: string
  icon: ReactNode
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, icon }) => {
 return (
   <SectionTitleContainer>
    {icon}
    <RegularText color="subtitle" >{title}</RegularText>
    <RegularText size="s" >{subtitle}</RegularText>
   </SectionTitleContainer>
 );
}

export default SectionTitle;
