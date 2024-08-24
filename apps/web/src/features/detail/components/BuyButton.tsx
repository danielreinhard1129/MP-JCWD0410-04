import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Plus, Minus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

interface BuyButtonProps {
  startPrice: number;
  ticketName: string;
  ticketDescription: string;
  endDate: Date;
  price: number;
  isSoldOut: boolean;
  maxQuantity: number;
}

const BuyButton: React.FC<BuyButtonProps> = ({
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
  const [isOpen, setIsOpen] = useState(false);

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

  const handleBuy = () => {
    console.log(`Buying ${quantity} tickets`);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Beli Tiket
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white shadow-lg">
        <Card className="w-full border-0 shadow-none bg-white">
          <CardHeader className="flex justify-between items-center bg-white">
            <CardTitle className="text-2xl font-bold text-black">PRESALE</CardTitle>
            <Button variant="ghost" onClick={() => setIsOpen(false)} className="p-2 text-black">
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="bg-white">
            <p className="text-gray-600">Mulai dari Rp {startPrice.toLocaleString()}</p>
            <div className="flex items-center justify-between mt-4 mb-4">
              <span className="font-semibold text-black">Quantity:</span>
              <div className="flex items-center">
                <Button
                  onClick={decrementQuantity}
                  disabled={quantity === 1 || isSoldOut}
                  className="p-2 bg-white text-black border border-gray-300"
                  variant="outline"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="mx-4 font-semibold text-black">{quantity}</span>
                <Button
                  onClick={incrementQuantity}
                  disabled={quantity === maxQuantity || isSoldOut}
                  className="p-2 bg-white text-black border border-gray-300"
                  variant="outline"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="mt-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleExpand}
              >
                <h3 className="font-semibold text-black">{ticketName}</h3>
                {isExpanded ? <ChevronUp className="text-black" /> : <ChevronDown className="text-black" />}
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
          <CardFooter className="flex justify-between items-center bg-white">
            <span className="text-xl font-bold text-black">Rp {(price * quantity).toLocaleString()}</span>
            <Button 
              onClick={handleBuy}
              className="bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isSoldOut}
            >
              {isSoldOut ? 'Sold Out' : `Beli ${quantity} Tiket`}
            </Button>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default BuyButton;