import CreateEventForm from "../forms/CreateEventForm";
import Button from "../ui/Button";

const DashboardEvents = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="text-blue-500 text-xl font-medium">My Events</div>
        <Button label="Add event" />
      </div>
      <div className="py-3">
        <hr className="border-[0.3px] border-neutral-700" />
      </div>
      <div className="text-lg text-neutral-300">Ongoing</div>
      <CreateEventForm />
    </div>
  );
};

export default DashboardEvents;
