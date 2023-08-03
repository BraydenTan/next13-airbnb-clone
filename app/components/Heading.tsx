'use client';

interface HeadingProps {
  //q: what is this interface HeadingProps helping for ?
  //a: interface HeadingProps is helping for the props of the Heading component
  //   it is used to define the props of the Heading component
  //q: what is the interface used for ?
  //a: the interface is used to define the props of the Heading component
  // q: what is the function that 'interface' ? how we used it?
  // a: the function that 'interface' is used to define the props of the Heading component
  //    we used it by defining the props of the Heading component
  //q: intoduce keyword 'interface' to me ? what is purpose in react ?
  //a: interface is a react keyword that is used to define the props of the Heading component
  //   it is used to define the props of the Heading component
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ 
  //q: what is this React.FC<HeadingProps> helping for ?
  //a: React.FC<HeadingProps> is helping for the props of the Heading component
  //   it is used to define the props of the Heading component
  title, 
  subtitle,
  center
}) => {
  return ( 
    <div className={center ? 'text-center' : 'text-start'}>
      <div className="text-2xl font-bold">
        {title}
      </div>
      <div className="font-light text-neutral-500 mt-2">
        {subtitle}
      </div>
    </div>
   );
}
 
export default Heading;