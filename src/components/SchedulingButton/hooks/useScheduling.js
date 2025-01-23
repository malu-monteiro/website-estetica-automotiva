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
    if (selectedService && selectedDate && selectedTime) {
      setOpen(false);
      setContactModalOpen(true);
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return {
    open,
    setOpen,
    contactModalOpen,
    setContactModalOpen,
    selectedDate,
    setSelectedDate,
    selectedService,
    setSelectedService,
    selectedTime,
    setSelectedTime,
    contactInfo,
    setContactInfo,
    handleNextStep,
  };
};
