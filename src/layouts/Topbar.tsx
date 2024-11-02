import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Topbar = ({ text }: { text: string }) => {
  const navigate = useNavigate();
  return (
    <section className="z-30 sticky top-0 bg-purple flex items-center py-6 px-4 text-background">
      <Button variant="transparent" size="no-pad" onClick={() => navigate(-1)}>
        <ArrowLeft />
      </Button>

      <h2 className="text-center basis-[80%]">{text}</h2>
    </section>
  );
};

export default Topbar;
