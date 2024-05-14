import Navbar from '../components/header';
import '../assets/style/about.css';

function About() {
  return (
    <div>
        <Navbar />
        <div className='about-page'>
            <h1>RetroChic</h1>
            <p>
            Nous sommes une équipe passionnée qui croit en la puissance de la mode pour inspirer la confiance et l'expression de soi. Notre voyage a commencé avec une simple idée : créer un espace où chacun peut trouver des vêtements qui lui permettent de se sentir à la fois bien dans sa peau et respectueux de l'environnement.
            </p>
            <h2>Notre mission</h2>
            <p>
            Chez RetroChic, notre mission est de promouvoir une mode durable et éthique. Nous croyons fermement que la mode ne devrait pas seulement être belle, mais aussi responsable. C'est pourquoi nous nous engageons à offrir une sélection soigneusement curatée de vêtements de seconde main, réduisant ainsi notre empreinte carbone et contribuant à la préservation de notre planète.
            </p>
            <h2>Ce Que Nous Proposons</h2>
            <p>
            Sur notre plateforme, vous trouverez une variété de vêtements de haute qualité, allant des pièces vintage uniques aux marques contemporaines bien-aimées. Chaque article a été soigneusement sélectionné pour son style, sa qualité et son impact environnemental positif.
            </p>
            <h2>Notre Engagement envers la Durabilité</h2>
            <p>
            Chez RetroChic, nous prenons notre engagement envers la durabilité très au sérieux. Nous travaillons constamment pour minimiser notre empreinte écologique en utilisant des matériaux d'emballage recyclés, en encourageant le recyclage et en soutenant des pratiques de fabrication éthiques.
            </p>
            <h2>Rejoignez-Nous</h2>
            <p>
            Que vous soyez passionné par la mode, l'environnement ou les deux, nous vous invitons à faire partie de notre communauté. Explorez notre sélection, découvrez de nouvelles pièces et contribuez à un avenir plus durable pour la mode.<br/>
            Merci de soutenir notre mission et de partager notre vision !
            </p>
            <h3>L'équipe de RetroChic</h3>
        </div>
    </div>
  );
}

export default About;