import { Award, Recycle, Plane } from "lucide-react";

const features = [
  {
    icon: Award,
    label: "ISO certificado",
  },
  {
    icon: Recycle,
    label: "100% Reciclable",
  },
  {
    icon: Plane,
    label: "Exportación",
  },
];

export function FeatureIcons() {
  return (
    <div className="flex items-center justify-between gap-8 mt-8">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div key={index} className="flex flex-col items-center text-center">
            <Icon className="h-8 w-8 text-foreground mb-2" />
            <span className="text-sm text-secondary-foreground font-medium">
              {feature.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
