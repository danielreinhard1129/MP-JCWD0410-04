"use client";

import DateTimePicker from "@/components/DatePicker";
import FormInput from "@/components/FormInput";
import RichTextEditor from "@/components/RichTextEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useCreateEvent from "@/hooks/api/event/useCreateEvent";
import useGetCategories from "@/hooks/api/category/useGetCategories";
import { useFormik } from "formik";
import { X } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { ChangeEvent, useRef, useState } from "react";
import { CreateEventSchema } from "./schemas/CreateEventSchema";

const CreateEventPage: React.FC = () => {
  const { mutateAsync: createEvent, isPending } = useCreateEvent();
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(0);
  const session = useSession();

  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      location: "",
      startDate: undefined,
      endDate: undefined,
      price: 0,
      quota: 0,
      img: null,
      availableSeat: 0,
      userId: session.data?.user.id!,
      categoryId: 1,
    },
    validationSchema: CreateEventSchema,
    onSubmit: async (values) => {
      values.availableSeat = values.quota;
      await createEvent({ ...values, categoryId: selectedCategoryId });
    },
  });

  const handleSelectCategory = (value: string) => {
    setSelectedCategoryId(Number(value));
    refetch();
  };

  const { data: item, refetch } = useGetCategories();

  const [selectedImage, setSelectedImage] = useState<string>("");
  const thumbnailRef = useRef<HTMLInputElement>(null);

  const onChangeThumbnail = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length) {
      formik.setFieldValue("thumbnail", files[0]);
      setSelectedImage(URL.createObjectURL(files[0]));
    }
  };

  const removeSelectedImage = () => {
    formik.setFieldValue("thumbnail", null);
    setSelectedImage("");
    if (thumbnailRef.current) {
      thumbnailRef.current.value = "";
    }
  };

  return (
    <div className="justify-centerpx-4 container mx-auto flex min-h-screen w-full items-center py-8 sm:px-6 lg:px-8">
      <div className="w-full rounded-3xl bg-white p-4 shadow-lg sm:p-6 lg:p-8">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold sm:text-xl">
              Create New Event
            </h2>
            <button className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="col-span-full">
              <FormInput
                name="title"
                type="text"
                label="Title"
                value={formik.values.title}
                error={formik.errors.title}
                isError={false}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className="col-span-full">
              <FormInput
                name="location"
                type="text"
                label="Location"
                value={formik.values.location}
                error={formik.errors.location}
                isError={false}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className="col-span-full sm:col-span-1">
              <label
                htmlFor="startDate"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Start Date
              </label>
              <DateTimePicker
                onDateTimeChange={(date) =>
                  formik.setFieldValue("startDate", date)
                }
              />
            </div>

            <div className="col-span-full sm:col-span-1">
              <label
                htmlFor="endDate"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                End Date
              </label>
              <DateTimePicker
                onDateTimeChange={(date) =>
                  formik.setFieldValue("endDate", date)
                }
              />
            </div>

            <div className="col-span-full sm:col-span-1">
              <FormInput
                name="price"
                type="number"
                label="Price"
                value={formik.values.price}
                error={formik.errors.price}
                isError={false}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className="col-span-full sm:col-span-1">
              <FormInput
                name="quota"
                type="number"
                label="Quota"
                value={formik.values.quota}
                error={formik.errors.quota}
                isError={false}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className="col-span-full">
              <RichTextEditor
                label="Description"
                onChange={(html: string) => formik.setFieldValue("desc", html)}
                isError={Boolean(formik.errors.desc)}
                value={formik.values.desc}
              />
            </div>

            <div className="col-span-full">
              <Label>Thumbnail</Label>
              <Input
                ref={thumbnailRef}
                onChange={onChangeThumbnail}
                type="file"
                accept="image/*"
                className="mt-1 flex w-full items-center text-indigo-600 hover:text-indigo-700"
              />
            </div>

            {selectedImage && (
              <div className="col-span-full">
                <div className="relative h-32 w-full sm:h-48 sm:w-96">
                  <Image
                    src={selectedImage}
                    alt="thumbnail"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>
                <button
                  onClick={removeSelectedImage}
                  className="mt-2 text-sm text-red-600 hover:text-red-800"
                  type="button"
                >
                  Remove Image
                </button>
              </div>
            )}

            <div className="col-span-full">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Category
              </label>
              <Select onValueChange={handleSelectCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose Event Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {item?.map((category, index: number) => {
                      return (
                        <SelectItem key={index} value={String(category.id)}>
                          {category.category.charAt(0).toUpperCase() +
                            category.category.slice(1).toLowerCase()}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="flex flex-wrap gap-2">
                {/* Add category selection options here */}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col-reverse justify-end gap-4 sm:flex-row sm:space-x-4">
            <Button
              type="submit"
              className="bg-color3 hover:bg-color2 w-full sm:w-auto"
              disabled={isPending || !formik.isValid}
              onSubmit={() => {
                if (!formik.isValid) {
                  console.log("Form is invalid. Errors:", formik.errors);
                }
              }}
            >
              {isPending ? "Creating Event..." : "Create Event"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEventPage;
