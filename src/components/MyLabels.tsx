import './mylabels.css';

export interface MyLabelsProps{
   /**
   * this is the label's default message ?
   */
  label: string;
  /**
   * this is default label size ?
   */
  size: 'normal'| 'h1' | 'h2' | 'h3'; 
  /**
   * this is the default color ?
   */
  color?: 'primary'| 'secondary' | 'tertiary'; 
  /**
   * this is the default value ?
   */
  allCaps?: boolean; 
  /**
   * coloca el color de la fuente
   */
  fontColor?: string;  
}
export const MyLabels = ({ 
  label = 'No Label',
  size = 'normal', 
  color = 'primary',
  allCaps = false,
  fontColor
}: MyLabelsProps ) => {
  return (
    <span 
      className={`label ${size} text-${color}`}  
      style={{ color: fontColor }}
      >
        { allCaps
          ? label.toUpperCase(): label
        }
      </span>
  )
}
