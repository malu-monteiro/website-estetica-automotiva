import { useState } from "react";

export const useScheduling = (initialService = "") => {
  const [open, setOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedTime, setSelectedTime] = useState(null);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleNextStep = () => {
    setOpen(false);
    setContactModalOpen(true);
  };

  return {
    open,
    setOpen,
    contactModalOpen,
    setContactModalOpen,
    selectedService,
    setSelectedService,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    contactInfo,
    setContactInfo,
    handleNextStep,
  };
};
