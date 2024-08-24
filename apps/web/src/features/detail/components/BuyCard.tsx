import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface PresaleTicketProps {
  startPrice: number;
  ticketName: string;
  ticketDescription: string;
  endDate: Date;
  price: number;
  isSoldOut: boolean;
  maxQuantity: number;
}

const PresaleTicket: React.FC<PresaleTicketProps> = ({
  startPrice,
  ticketName,
  ticketDescription,
  endDate,
  price,
  isSoldOut,
  maxQuantity,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const incrementQuantity = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-2xl font-bold">PRESALE</CardTitle>
        <ChevronUp className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">Mulai dari Rp {startPrice.toLocaleString()}</p>
        <div className="flex items-center justify-between mt-4 mb-4">
          <span className="font-semibold">Quantity:</span>
          <div className="flex items-center">
            <Button
              onClick={decrementQuantity}
              disabled={quantity === 1 || isSoldOut}
              className="p-2"
              variant="outline"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="mx-4 font-semibold">{quantity}</span>
            <Button
              onClick={incrementQuantity}
              disabled={quantity === maxQuantity || isSoldOut}
              className="p-2"
              variant="outline"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Button 
          className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white"
          disabled={isSoldOut}
        >
          {isSoldOut ? 'Sold Out' : `Beli ${quantity} Tiket`}
        </Button>
        <div className="mt-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={toggleExpand}
          >
            <h3 className="font-semibold">{ticketName}</h3>
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </div>
          {isExpanded && (
            <p className="mt-2 text-sm text-gray-600">{ticketDescription}</p>
          )}
          <p className="mt-2 text-sm text-blue-600">
            Berakhir {endDate.toLocaleString('id-ID', { 
              day: 'numeric',
              month: 'long',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              timeZoneName: 'short'
            })}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-xl font-bold">Rp {(price * quantity).toLocaleString()}</span>
        {isSoldOut && (
          <span className="text-red-500 font-semibold">SOLD OUT</span>
        )}
      </CardFooter>
    </Card>
  );
};

export default function PresaleTicketExample() {
  return (
    <PresaleTicket
      startPrice={838000}
      ticketName="PRESALE 4 : Early Entry 3 Day Pass"
      ticketDescription="Price excludes tax & admin fees- Ticket valid for 3 days (Friday to Sunday, 22..."
      endDate={new Date('2024-07-26T23:00:00+07:00')}
      price={838000}
      isSoldOut={false}
      maxQuantity={5}
    />
  );
}