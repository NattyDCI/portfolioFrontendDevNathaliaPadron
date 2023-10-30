 import JobPosition from '../JobPosition';
import Trademark from '../Trademark';
import ProjectCards from '../ProjectCards';
import Button from '../Button';
import Abilities from '../Abilities';


function Hero() {
  return (
    <div>
        <div>
            < Abilities />
        </div>
        <div>
            < Trademark />
        </div>
        <div>
            < JobPosition />
        </div>
        <div>
            < ProjectCards />
        </div>
        < Button />
    </div>
  )
}

export default Hero