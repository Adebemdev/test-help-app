import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function RadioGroupButton() {
  return (
    <>
      <RadioGroup defaultValue="comfortable" className="space-y-3">
        <p>How did you hear about us ?</p>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="default" id="r1" className="" />
          <Label htmlFor="r1" className="text-sm font-medium">
            Social media
          </Label>
        </div>

        <div className="flex items-center gap-3">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2" className="text-sm font-medium">
            Family & Friends
          </Label>
        </div>

        <div className="flex items-center gap-3">
          <RadioGroupItem value="fliers" id="r3" />
          <Label htmlFor="r3" className="text-sm font-medium">
            Fliers
          </Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="goggle" id="r4" />
          <Label htmlFor="r4" className="text-sm font-medium">
            Goggle Search
          </Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="blog" id="r5" />
          <Label htmlFor="r5" className="text-sm font-medium">
            Blog or online Article
          </Label>
        </div>
      </RadioGroup>
    </>
  );
}
