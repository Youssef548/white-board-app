import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/board")({
  component: () => <h1 className="text-2xl font-bold">Whiteboard 🎨</h1>,
});
