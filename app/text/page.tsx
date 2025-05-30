import { FC } from 'react';
import Image from 'next/image';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Card, CardContent } from '@/components/ui/card';

const LandingPage: FC = () => {
  return (
    <main className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-blue-800 text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="Cozy Walls Logo" width={150} height={50} />
          <span className="text-lg font-semibold">414.940.2571</span>
        </div>
        {/* <Button className="bg-yellow-500 text-black rounded-lg">BOOK MY FREE CONSULTATION</Button> */}
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-4xl font-bold mb-2">INJECTION SPRAY FOAM INSULATION</h1>
          <p className="text-lg">Wrap Your Home in Comfort Year-Round with Expert Exterior Wall Insulation</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">ABOUT OUR TEAM</h2>
        <p className="max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-200 py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* {['Open Cell Spray Foam', 'Closed Cell Spray Foam', 'Blown-In', 'Rigid Foam', 'Fill Foil', 'Batt Insulation'].map((service, index) => (
            <Card key={index} className="bg-white p-4 text-center">
              <CardContent>{service}</CardContent>
            </Card>
          ))} */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-blue-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Have a Question?</h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-lg mx-auto">
          {/* <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Phone" />
          <textarea className="col-span-3 p-2 rounded-md" placeholder="Message"></textarea>
          <Button className="col-span-3 bg-yellow-500 text-black">SEND US A MESSAGE</Button> */}
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <Image src="/logo.png" alt="Cozy Walls Logo" width={150} height={50} />
        <p>© 2025 Cozy Walls Foam Insulation, LLC. All Rights Reserved.</p>
      </footer>
    </main>
  );
};

export default LandingPage;
