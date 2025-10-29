"use client";

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function RegistrationPopup({ isOpen, onClose, onAccept }) {
  const [userType, setUserType] = React.useState('');
  const [trustedAuthor, setTrustedAuthor] = React.useState(false);
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleAccept = () => {
    if (userType && trustedAuthor && acceptedTerms) {
      onAccept(userType);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Welcome to MindEase</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div>
            <Label className="font-semibold text-lg mb-3 block">Are you a:</Label>
            <div className="grid grid-cols-2 gap-3">
              <Button 
                type="button"
                variant={userType === 'student' ? 'default' : 'outline'}
                onClick={() => setUserType('student')}
                className={`h-20 ${userType === 'student' ? 'bg-blue-500 hover:bg-blue-600' : ''}`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">🎓</div>
                  <div>Student</div>
                </div>
              </Button>
              <Button 
                type="button"
                variant={userType === 'counselor' ? 'default' : 'outline'}
                onClick={() => setUserType('counselor')}
                className={`h-20 ${userType === 'counselor' ? 'bg-green-500 hover:bg-green-600' : ''}`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">👨‍⚕️</div>
                  <div>Counselor</div>
                </div>
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Checkbox 
                id="trust" 
                checked={trustedAuthor}
                onCheckedChange={setTrustedAuthor}
              />
              <Label htmlFor="trust" className="text-sm">
                I trust the author and understand this is for mental health support
              </Label>
            </div>

            <div className="flex items-center space-x-3">
              <Checkbox 
                id="terms" 
                checked={acceptedTerms}
                onCheckedChange={setAcceptedTerms}
              />
              <Label htmlFor="terms" className="text-sm">
                I have read and agree to the Terms and Conditions
              </Label>
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              onClick={handleAccept}
              disabled={!userType || !trustedAuthor || !acceptedTerms}
              className="bg-green-500 hover:bg-green-600"
            >
              Continue
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}