import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

<nav className="space-y-2">
  <Button variant="ghost" className="w-full justify-start" asChild>
    <Link to="/">🏠 Home</Link>
  </Button>
  <Button variant="ghost" className="w-full justify-start" asChild>
    <Link to="/board">🖌 Board</Link>
  </Button>
</nav>;
