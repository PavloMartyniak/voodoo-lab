import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Modal } from "../modal";
import { Avatar } from "../avatar";
import { TextField } from "../text-field";

type FormData = {
  name: string;
  email: string;
};

export const AnnouncerModal = ({
  isOpen,
  onClose,
  announcerName,
  announcerAvatar,
}: {
  isOpen: boolean;
  onClose: () => void;
  announcerName: string;
  announcerAvatar: string;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Form Data Submitted:", data);
    await Promise.all([new Promise((resolve) => setTimeout(resolve, 1000))]);
    reset();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Hire announcer: ${announcerName}`}
    >
      <div className="flex flex-col items-center">
        <Avatar src={announcerAvatar} size="xl" />
        <form
          className="mt-4 w-full space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-2">
            <h1 className="mb-6 text-lg font-semibold">
              Please enter the information below so that we can contact you!
            </h1>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name*
              </label>
              <TextField
                placeholder="Enter your name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address*
              </label>
              <TextField
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-4 py-2 rounded-md ${
                isSubmitting
                  ? "bg-gray-500 text-gray-200 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-700"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Hire Announcer"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
