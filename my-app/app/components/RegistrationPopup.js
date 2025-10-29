import React, { useState } from 'react';
import { Button } from './ui/button';

export default function RegistrationPopup({ isOpen, onClose, onAccept }) {
  const [userType, setUserType] = useState('');

  if (!isOpen) return null;

  const handleAccept = () => {
    if (userType) {
      onAccept(userType);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h2 className="text-xl font-bold mb-4">Complete Your Registration</h2>
        <p className="mb-4">Please select your user type to continue:</p>
        <div className="space-y-2 mb-6">
          <label className="flex items-center">
            <input
              type="radio"
              name="userType"
              value="student"
              checked={userType === 'student'}
              onChange={(e) => setUserType(e.target.value)}
              className="mr-2"
            />
            Student
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="userType"
              value="professional"
              checked={userType === 'professional'}
              onChange={(e) => setUserType(e.target.value)}
              className="mr-2"
            />
            Professional
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="userType"
              value="other"
              checked={userType === 'other'}
              onChange={(e) => setUserType(e.target.value)}
              className="mr-2"
            />
            Other
          </label>
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleAccept} disabled={!userType}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
