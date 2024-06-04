"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/shared/ui/dialog";
import { Button } from "~/shared/ui/button";
import { Input } from "~/shared/ui/input";
import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/shared/ui/form";
import { toast } from "sonner";
import { updatePricePlan } from "~/entities/price-plans/api/update-price-plan";
import { PricePlan } from "~/entities/price-plans/types";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  description: z
    .string()
    .min(2, "Description must be at least 2 characters long"),
});

export const UpdatePricePlanDialog = ({
  pricePlan,
}: {
  pricePlan: PricePlan;
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: pricePlan.description || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await updatePricePlan(String(pricePlan.id), values)
      .then(() => {
        router.refresh();
        setIsOpen(false);
      })
      .catch((error) => {
        toast.error("Something went wrong");
      });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <DialogHeader>
              <DialogTitle>Edit price plan {pricePlan.id}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Price plan description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
