import Button from "./Button";

const SelectTicket = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="rounded-lg w-auto border-[0.3px] border-neutral-700 bg-neutral-800 text-neutral-300 hover:shadow-xl hover:shadow-black/70 p-6">
        <div className="text-xl font-medium">Select Your Ticket</div>
        <div className="font-medium pt-8">VIP</div>
        <div className="divide-y divide-dashed">
          <div className="font-light">
            <div className="pb-2 pt-3">VIP 1</div>
            <div className="text-sm text-neutral-400 pb-2">
              VIP ticket holders get access to all general admission areas, plus
              an exclusive lounge with comfortable seating, private restrooms,
              and a dedicated bar with premium drinks (not included in ticket
              price).
            </div>
            <div className="flex flex-row items-center justify-between pb-3">
              <div>Rp 3477000</div>
              <div className="text-blue-500">AVAILABLE</div>
            </div>
          </div>
          <div className="font-light">
            <div className="pb-2 pt-3">VIP 2</div>
            <div className="text-sm text-neutral-400 pb-2">
              VIP ticket holders get access to all general admission areas, plus
              an exclusive lounge with comfortable seating, private restrooms,
              and a dedicated bar with premium drinks (not included in ticket
              price).
            </div>
            <div className="flex flex-row items-center justify-between pb-3">
              <div>Rp 2997000</div>
              <div className="text-blue-500">AVAILABLE</div>
            </div>
          </div>
          <div className="font-light">
            <div className="pb-2 pt-3">VIP 3</div>
            <div className="text-sm text-neutral-400 pb-2">
              VIP ticket holders get access to all general admission areas, plus
              an exclusive lounge with comfortable seating, private restrooms,
              and a dedicated bar with premium drinks (not included in ticket
              price).
            </div>
            <div className="flex flex-row items-center justify-between pb-3">
              <div>Rp 2397000</div>
              <div className="text-red-500">SOLD OUT</div>
            </div>
          </div>
        </div>
        <div className="font-medium pt-8">FESTIVAL</div>
        <div className="divide-y divide-dashed">
          <div className="font-light">
            <div className="pb-2 pt-3">FESTIVAL 1</div>
            <div className="text-sm text-neutral-400 pb-2">
              This is the most affordable option and grants access to the
              general festival grounds with multiple stages and vendors
            </div>
            <div className="flex flex-row items-center justify-between pb-3">
              <div>Rp 997000</div>
              <div className="text-blue-500">AVAILABLE</div>
            </div>
          </div>
          <div className="font-light">
            <div className="pb-2 pt-3">FESTIVAL 2</div>
            <div className="text-sm text-neutral-400 pb-2">
              This is the most affordable option and grants access to the
              general festival grounds with multiple stages and vendors
            </div>
            <div className="flex flex-row items-center justify-between pb-3">
              <div>Rp 697000</div>
              <div className="text-red-500">SOLD OUT</div>
            </div>
          </div>
          <div className="font-light">
            <div className="pb-2 pt-3">FESTIVAL 3</div>
            <div className="text-sm text-neutral-400 pb-2">
              This is the most affordable option and grants access to the
              general festival grounds with multiple stages and vendors
            </div>
            <div className="flex flex-row items-center justify-between pb-3">
              <div>Rp 397000</div>
              <div className="text-red-500">SOLD OUT</div>
            </div>
          </div>
        </div>
      </div>
      <Button label="Buy Ticket"></Button>
    </div>
  );
};

export default SelectTicket;
